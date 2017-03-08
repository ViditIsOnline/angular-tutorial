import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.scss']
})

export class FormValidatorComponent implements OnInit {
  // start
  detailsForm: FormGroup;

  constructor(private _fileReadService: FileReadService, private _formBuilder: FormBuilder) { 
    this.detailsForm = this._formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      isIndian: [null, [Validators.required]],
      primaryLanguage: [null, [Validators.required]]
    });
  }
  // end

  tsFileContent: string;
  htmlFileContent: string;

  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/forms/form-validator/form-validator.component.ts')
      .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
        .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/forms/form-validator/form-validator.component.html')
      .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
        .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
