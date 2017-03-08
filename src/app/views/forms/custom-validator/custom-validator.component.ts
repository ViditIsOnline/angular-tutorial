import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {
  // start
  detailsForm: FormGroup;

  constructor(private _fileReadService: FileReadService, private _formBuilder: FormBuilder) {
    this.detailsForm = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3), this.sentenceCaseValidator]],
      lastName: [null, [Validators.required, Validators.minLength(3), this.sentenceCaseValidator]],
      isIndian: [null, [Validators.required]],
      primaryLanguage: [null, [Validators.required]]
    });
  }

  sentenceCaseValidator(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.value) {
      console.log(c.value[0]);
      if (c.value[0] !== c.value[0].toUpperCase()) {
        return { 'case': true };
      }
    }
    return null;
  }
  // end

  tsFileContent: string;
  htmlFileContent: string;

  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/forms/custom-validator/custom-validator.component.ts')
      .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
        .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/forms/custom-validator/custom-validator.component.html')
      .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
        .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
