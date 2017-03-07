import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../../../core/services/file-read.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

// start
export class ReactiveFormComponent implements OnInit {
  firstName= new FormControl();
  lastName= new FormControl();
  isIndian= new FormControl(false);
  primaryLanguage= new FormControl();

  detailsForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    isIndian: this.isIndian,
    primaryLanguage: this.primaryLanguage
  });

  updateValues(){
    this.detailsForm.setValue({
      firstName : 'Firstname changed',
      lastName: 'Lastname changed',
      isIndian: true,
      primaryLanguage: 'Hindi'
    });
  }

  // end
  tsFileContent: string;
  htmlFileContent: string;

  constructor(private _fileReadService: FileReadService){ }

  ngOnInit(){
    this._fileReadService.getFileContents('src/app/views/forms/reactive-form/reactive-form.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/forms/reactive-form/reactive-form.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
