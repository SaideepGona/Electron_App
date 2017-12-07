// Kwanho Kim
// 11.05.2017

package main

import (
  "math"
  "math/rand"
  "time"
  "fmt"
)

func (b *Bacteria) CanReplicate(p *Petri) bool {
  fmt.Println("2")
  // This function tests whether a bacterium has enough energy to replicate.
  // If it has energyCap greater than repEnergy, the function returns true.
  if b.currentEnergy > b.repEnergy && b.IsThereSpace(p) {
    return true
  }
  return false
}



func (b *Bacteria) IsThereSpace(p *Petri) bool {
  fmt.Println(b)
  if len(p.allBacteria) == 1 {
    return true
  } else {
    fmt.Println("6")
    for _, bac := range p.allBacteria {
      fmt.Println(bac)
      for bac.position != b.position {
        if b.DistToTarget(bac) < 4*b.sizeRadius {
          return false
        }
        break
      }
    }
  }
  return true
}

func (p *Petri) Replication() {
  // if CanReplicate returns true, bacterium can undergo replication
  fmt.Println("1")
  for i:=0; i<len(p.allBacteria); i++ {
    b := p.allBacteria[i]
    if b.CanReplicate(p) {
      fmt.Println("4")
      p.CreateDaughterBac(b)
      fmt.Println("done rep")
      b.currentEnergy -= 20
    }
  }
  // b.BurnEnergy(Replication, 1)
}

func (p *Petri) CreateDaughterBac(b Bacteria) {
  fmt.Println("5")
  // Daughter cell is created at an arbitrary location next to parent
  x, y := p.PickLocation(b)
  // create a daughter bacterium at a location x, y
  p.allBacteria = append(p.allBacteria, InitializeBacterium(x, y, b))
}

func (p *Petri) PickLocation(b Bacteria) (float64, float64) {
  x, y := RepLocation(b)
  for x > 2 * p.radius || y > 2 * p.radius {
    fmt.Println(x)
    fmt.Println(y)
    fmt.Println("issue")
    x, y = RepLocation(b)
  }
  return x, y
}

func RepLocation(b Bacteria) (float64, float64) {
  distToDaughter := b.sizeRadius*2
  theta := RandomTheta()
  x := b.position.coorX + distToDaughter*math.Cos(theta)
  y := b.position.coorY + distToDaughter*math.Sin(theta)
  return x, y
}

func RandomTheta() float64 {
  rand.Seed(time.Now().UnixNano())
  return rand.Float64() * 2 * math.Pi
}

func InitializeBacterium(x, y float64, b Bacteria) Bacteria {
  var newBact Bacteria
  newBact.sizeRadius = b.sizeRadius
  newBact.attackRange = b.attackRange
  newBact.ABenzyme = b.ABenzyme
  newBact.resistEnzyme = b.resistEnzyme
  newBact.currentEnergy = 40
  newBact.energyCapacity = b.energyCapacity
  newBact.repEnergy = b.repEnergy
  newBact.position.coorX = x
  newBact.position.coorY = y
  return newBact
}
