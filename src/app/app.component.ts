import { Component } from '@angular/core';

interface HobbiesForCheckbox {
  id: number;
  hobbyName: string;
  isSelected: boolean
}

interface HobbiesForSelectOption {
  id: number;
  hobbyName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  radioSelected = "Male";
  hobbySelected: string;
  isHobbyChecked: boolean = false;
  hobbySelectedSingleArray = "Cricket";
  hobbySelectedObjectArray : HobbiesForSelectOption = {id: 1, hobbyName: "Cricket"};

  hobbiesForSingleArray = [];
  hobbiesForObjectArray: HobbiesForCheckbox[] = [];
  hobbiesSelected = []

  ngOnInit() {
    this.hobbiesForSingleArray = ["Cricket", "Football", "Movies", "Songs"]
    this.hobbiesForObjectArray = [
      {id: 1, hobbyName: this.hobbiesForSingleArray[0], isSelected: false},
      {id: 2, hobbyName: this.hobbiesForSingleArray[1], isSelected: false},
      {id: 3, hobbyName: this.hobbiesForSingleArray[2], isSelected: false},
      {id: 4, hobbyName: this.hobbiesForSingleArray[3], isSelected: false},
    ]
  }

  getRadioSelected(event) {
    this.radioSelected=event.target.value;
  }

  getCheckboxSelected(event) {
    let index = this.hobbiesSelected.indexOf(event.target.value)
    if (index == -1) {
      this.hobbiesSelected.push(event.target.value)
    } else {
      this.hobbiesSelected.splice(index, 1)
    }
  }

  getCheckboxSelected1(event) {
    this.hobbiesForObjectArray.find(x => {
      if(x.hobbyName === event.target.value) {
        return x.isSelected = !x.isSelected;
      }
    })
  }

  getOptionSelected(event) {
    this.hobbySelectedSingleArray = event.srcElement.value;
  }

  getOptionSelected1(event) {
    let id = event.srcElement.selectedIndex + 1;
    let hobbyName = event.srcElement.value
    this.hobbySelectedObjectArray = {id: id, hobbyName: hobbyName};
  }

}
