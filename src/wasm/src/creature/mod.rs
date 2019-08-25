use crate::na::{Point2, Unit, Vector2};
use std::cell::{RefMut};
use rand::{rngs::SmallRng};

mod mutatable;
use mutatable::*;

const MOTION_ENERGY_COST : f64 = 0.1;

#[derive(Debug, Copy, Clone, Serialize, Deserialize)]
enum CreatureState {
  DEAD,
  ASLEEP,
  ACTIVE,
}

// automatically ordered top to bottom
#[derive(Debug, Copy, Clone, Serialize, Deserialize, Eq, PartialEq, PartialOrd)]
pub enum ObjectiveIntensity {
  // Meh level
  MinorCraving,
  MinorAversion,
  // Kind of want this
  ModerateCraving,
  ModerateAversion,
  // Seriously starving
  MajorCraving,
  MajorAversion,
  // Will die unless this happens
  VitalCraving,
  VitalAversion,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Creature {
  // mutatable
  speed : Mutatable<f64>, // how far can it move in one step?
  pub sense_range : f64, // how far can it see?
  pub reach : f64, // how far can it interact with something?
  pub life_span: u32,

  // other
  pub foods_eaten : u32,
  pub energy : f64,
  pub age : u32,
  pub pos : Point2<f64>,
  pub home_pos : Point2<f64>,

  // array of position vectors
  pub movement_history : Vec<Point2<f64>>,

  state : CreatureState,
  // current target of the creature's desire
  // and its weight
  target: Option<(Point2<f64>, ObjectiveIntensity)>
}

impl Creature {
  pub fn new( pos : &Point2<f64> ) -> Self {
    Creature {
      state: CreatureState::ACTIVE,
      speed: Mutatable(1.0, 0.1),
      sense_range: 50.0,
      reach: 5.0,
      life_span: 4,

      foods_eaten: 0,
      energy: 100.0,
      age: 0,

      pos: pos.clone(),
      home_pos: pos.clone(),
      movement_history: vec![pos.clone()],
      target: None,
    }
  }

  // Instance methods
  //------------------
  pub fn reproduce(&self, rng : &mut RefMut<SmallRng>) -> Vec<Self> {
    // TODO could implement multiple children in future
    if self.will_reproduce() {
      let child = Creature {
        speed: self.speed.get_mutated(rng),

        ..Creature::new(&self.home_pos)
      };

      vec![child]
    } else {
      vec![]
    }
  }

  // copy self, but increase age. might die so optional
  pub fn grow_older(&self) -> Option<Self> {
    if self.age > self.life_span {
      None
    } else {
      let Creature {
        speed,
        sense_range,
        reach,
        life_span,
        ..
      } = *self;

      Some(Creature {
        speed,
        sense_range,
        reach,
        life_span,
        age: self.age + 1,

        ..Creature::new(&self.home_pos)
      })
    }
  }

  pub fn get_speed(&self) -> f64 {
    self.speed.0
  }

  pub fn is_alive(&self) -> bool {
    match self.state {
      CreatureState::DEAD => false,
      _ => true,
    }
  }

  pub fn is_active(&self) -> bool {
    match self.state {
      CreatureState::ACTIVE => true,
      _ => false,
    }
  }

  // move the creature, record its motion in history,
  // apply an energy cost.
  pub fn move_to( &mut self, pos : Point2<f64> ){
    self.pos = pos.clone();
    self.movement_history.push(pos);

    // // energy cost
    // let last = self.get_last_position().expect("Can not get last position.");
    // let displacement = self.pos - last;
    // the cost of moving
    let cost = self.get_motion_energy_cost();
    self.apply_energy_cost( cost );
  }

  pub fn get_motion_energy_cost(&self) -> f64 {
    0.5 * self.get_speed().powi(2)
  }

  pub fn get_direction(&self) -> Unit<Vector2<f64>> {
    // displacement vector to target
    let disp = self.target.map(|t| {
      let d = t.0 - self.pos;
      match t.1 {
        ObjectiveIntensity::MinorAversion|
        ObjectiveIntensity::ModerateAversion|
        ObjectiveIntensity::MajorAversion|
        ObjectiveIntensity::VitalAversion => -1. * d, // other way
        _ => d,
      }
    }).filter(|d| d.norm() != 0.).unwrap_or_else(|| {
      // or the direction it was traveling before
      self.get_last_position()
        .map(|last| self.pos - last)
        .unwrap_or_else(|| Vector2::x()) // or the x axis
    });

    Unit::new_normalize(disp)
  }

  pub fn add_objective(&mut self, targetPos : Point2<f64>, intensity : ObjectiveIntensity){
    if self.target.map(|t| intensity > t.1).unwrap_or(true) {
      self.target = Some((targetPos, intensity));
    }
  }

  pub fn reset_objective(&mut self){
    self.target = None;
  }

  pub fn will_reproduce(&self) -> bool {
    self.foods_eaten > 1
  }

  pub fn eat_food(&mut self){
    self.foods_eaten += 1;
  }

  pub fn sleep(&mut self){
    self.state = CreatureState::ASLEEP;
  }

  // get the position of this creature at time
  pub fn get_position( &self ) -> Point2<f64> {
    self.pos
  }

  pub fn get_last_position( &self ) -> Option<Point2<f64>> {
    let len = self.movement_history.len();
    if len <= 1 { return None; }

    Some(self.movement_history[len - 2])
  }

  pub fn can_see(&self, pt : &Point2<f64>) -> bool {
    (pt - self.pos).norm() <= self.sense_range
  }

  pub fn can_reach(&self, pt : &Point2<f64>) -> bool {
    (pt - self.pos).norm() <= self.reach
  }

  pub fn apply_energy_cost( &mut self, cost : f64 ){
    self.energy -= cost;

    if self.energy <= 0. {
      self.state = CreatureState::DEAD;
    }
  }
}
