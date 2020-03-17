import { Component } from '@angular/core';

interface HobbiesForCheckbox {
  id: number;
  hobbyName: string;
  isChecked: boolean
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
  hobbySelectedSingleArray = "Cricket";
  hobbySelectedObjectArray : HobbiesForSelectOption = {id: 1, hobbyName: "Cricket"};

  hobbiesForSingleArray = [];
  hobbiesForObjectArray: HobbiesForCheckbox[] = [];
  hobbiesSelected = []

  ngOnInit() {
    this.hobbiesForSingleArray = ["Cricket", "Football", "Movies", "Songs"]
    this.hobbiesForObjectArray = this.hobbiesForSingleArray.map((data, index) => {
      return {id: index, hobbyName: data, isChecked: false}
    });
      
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

  getCheckboxSelected1(event, obj: HobbiesForCheckbox) {
    obj.isChecked = !obj.isChecked
  }

  getOptionSelected(event) {
    this.hobbySelectedSingleArray = event.srcElement.value;
  }

  getOptionSelected1(event) {
    let index = event.srcElement.selectedIndex;
    this.hobbySelectedObjectArray = {id: this.hobbiesForObjectArray[index].id, hobbyName: this.hobbiesForObjectArray[index].hobbyName}
  }

}
