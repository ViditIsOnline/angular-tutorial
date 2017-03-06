import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-property',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.scss'],
})
// start
export class TwowayComponent implements OnInit {
  firstName = '';
  lastName = '';
  fontWeight = 'bold';
  // end

  tsFileContent: string;
  htmlFileContent: string;

  constructor(private _fileReadService: FileReadService) {

  }
  ngOnInit() {
    this._fileReadService.getFileContents('src/app/views/data-binding/twoway/twoway.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/data-binding/twoway/twoway.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
