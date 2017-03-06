import { Component, OnInit } from '@angular/core';
import { FileReadService } from '../../../core/services/file-read.service';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})

// start
export class InterpolationComponent implements OnInit{
  firstName = 'Vidit';
  lastName= 'Shah';
// end
tsFileContent: string;
  htmlFileContent: string;
  constructor(private _fileReadService: FileReadService){
  }
  ngOnInit(){
    this._fileReadService.getFileContents('src/app/views/data-binding/interpolation/interpolation.component.ts')
    .subscribe(tsFileContent => this.tsFileContent = this._fileReadService
    .trimContent(tsFileContent, FileReadService.TS));
    this._fileReadService.getFileContents('src/app/views/data-binding/interpolation/interpolation.component.html')
    .subscribe(htmlFileContent => this.htmlFileContent = this._fileReadService
    .trimContent(htmlFileContent, FileReadService.HTML));
  }
}
