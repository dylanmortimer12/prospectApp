import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  tools:string[] = ['hit','power','run','field','arm'];
  prospects:any[] = [
    {
    firstName: 'Kyle',
    lastName: 'Lewis',
    eta: 2019,
    rank: 1,
    hit: 55,
    power: 60,
    run: 50,
    field: 55,
    arm: 50,
    position: 'OF',
    isHitter: true
    }
  ]
  newFirst:string = 'First';
  newLast:string = 'Last';
  newEta:number = 2020;
  newRank:number = 69;
  newPosition:string = 'P';

  newHit:number = 50;
  newPower:number = 50;
  newRun:number = 50;
  newField:number = 50;
  newArm:number = 50;

  newFast:number = 50;
  newSecond:string = 'Curveball';
  newsecondGrade:number = 50;
  newThird:string = 'Changeup';
  newthirdGrade:number = 50;
  newControl:number = 50;
  newpitchPos:string = "P";
  

  isHitter:boolean = false;
  isPitcher:boolean = !this.isHitter;
  index:number;
  edit:boolean;


  constructor() { }
  
  ngOnInit() {
    
  }

  togglePosition(){
    this.isHitter = !this.isHitter;
    if(!this.isHitter){
      this.newPosition = 'P';
    }
    else{
      this.newPosition = '2B';
    }
  }

  addProspect(){
    if (this.edit){
      return;
    }
    if(this.isHitter){
      var newProspect = {
        firstName:this.newFirst,
        lastName:this.newLast,
        eta: this.newEta,
        rank: this.newRank,
        hit: this.newHit,
        power: this.newPower,
        run: this.newRun,
        field: this.newField,
        arm: this.newArm,
        position: this.newPosition,
        isHitter: true
      }
      this.prospects.push(newProspect);
    }
    else{
      var newpitchProspect = {
        firstName:this.newFirst,
        lastName:this.newLast,
        eta: this.newEta,
        rank: this.newRank,
        position: this.newPosition,
        fastball: this.newFast,
        secondPitch: this.newSecond,
        secondGrade: this.newsecondGrade,
        thirdPitch: this.newThird,
        thirdGrade: this.newthirdGrade,
        
        control: this.newControl,
        isHitter: false
      }
      this.prospects.push(newpitchProspect);
    }
    
    
    this.prospects.sort(function(a:any,b:any){
      return parseInt(a.rank) - parseInt(b.rank);
    });

    this.newFirst = 'First';
    this.newLast = 'Last';
    this.newEta = 2020;
    this.newRank = 69;
    this.newHit = 50;
    this.newPower = 50;
    this.newRun = 50;
    this.newField = 50;
    this.newArm = 50;

    if(this.isHitter){
      this.newPosition = '2B';
    }
    else{
      this.newPosition = 'P';
    }

    this.newFast = 50;
    this.newSecond = 'Curveball';
    this.newsecondGrade = 50;
    this.newThird = 'Changeup';
    this.newthirdGrade = 50;
    this.newControl = 50;
    
    return false;


  }

  editProspect(i){
    console.log(i);
    this.edit = true;
    this.index = i;
    if(this.prospects[i].isHitter){
      this.isHitter = true;
      this.newFirst = this.prospects[i].firstName;
      this.newLast = this.prospects[i].lastName;
      this.newEta = this.prospects[i].eta;
      this.newRank = this.prospects[i].rank;
      this.newHit = this.prospects[i].hit;
      this.newPower = this.prospects[i].power;
      this.newRun = this.prospects[i].run;
      this.newField = this.prospects[i].field;
      this.newArm = this.prospects[i].arm;
      this.newPosition = this.prospects[i].position;
    }
    else{
      this.isHitter = false;
      this.newFirst = this.prospects[i].firstName;
      this.newLast = this.prospects[i].lastName;
      this.newEta = this.prospects[i].eta;
      this.newRank = this.prospects[i].rank;
      this.newFast = this.prospects[i].fastball;
      this.newSecond = this.prospects[i].secondPitch;
      this.newsecondGrade = this.prospects[i].secondGrade;
      this.newThird = this.prospects[i].thirdPitch;
      this.newthirdGrade = this.prospects[i].thirdGrade;
      this.newControl = this.prospects[i].control;
      this.newPosition = this.prospects[i].position;
    }
  }

  saveProspect(){
    if(this.edit){
      if(this.prospects[this.index].isHitter){
        
        this.prospects[this.index].firstName = this.newFirst;
        this.prospects[this.index].lastName = this.newLast;
        this.prospects[this.index].eta = this.newEta;
        this.prospects[this.index].rank = this.newRank;
        this.prospects[this.index].hit = this.newHit;
        this.prospects[this.index].power = this.newPower;
        this.prospects[this.index].run = this.newRun;
        this.prospects[this.index].field = this.newField;
        this.prospects[this.index].arm = this.newArm;
        this.prospects[this.index].position = this.newPosition;
      }
      else{
        
        this.prospects[this.index].firstName = this.newFirst;
        this.prospects[this.index].lastName = this.newLast;
        this.prospects[this.index].eta = this.newEta;
        this.prospects[this.index].rank = this.newRank;
        this.prospects[this.index].fastball = this.newFast;
        this.prospects[this.index].secondPitch = this.newSecond;
        this.prospects[this.index].secondGrade = this.newsecondGrade;
        this.prospects[this.index].thirdPitch = this.newThird;
        this.prospects[this.index].thirdGrade = this.newthirdGrade;
        this.prospects[this.index].position = this.newPosition;
        this.prospects[this.index].control = this.newControl
      }

      this.prospects.sort(function(a:any,b:any){
        return parseInt(a.rank) - parseInt(b.rank);
      });

      this.newFirst = 'First';
      this.newLast = 'Last';
      this.newEta = 2020;
      this.newRank = 69;
      this.newHit = 50;
      this.newPower = 50;
      this.newRun = 50;
      this.newField = 50;
      this.newArm = 50;
      this.newPosition = '2B';

      this.newFast = 50;
      this.newSecond = 'Curveball';
      this.newsecondGrade = 50;
      this.newThird = 'Changeup';
      this.newthirdGrade = 50;
      this.newControl = 50;
      this.edit=false;
    }
  }

  deleteProspect(index) {
    this.prospects.splice(index,1);
  }
  
}

interface Prospect{
  firstName:string,
  lastName:string,
  eta:number,
  rank:number,
  position:string
}

interface hitProspect extends Prospect{
  hit:number,
  power:number,
  run:number,
  field:number,
  arm:number,
  isHitter:boolean;
}

interface pitchProspect extends Prospect{
  fastball:number,
  secondPitch:string,
  secondGrade:number,
  thirdPitch:string,
  thirdGrade:number,
  control:number
  isHitter:boolean;
}