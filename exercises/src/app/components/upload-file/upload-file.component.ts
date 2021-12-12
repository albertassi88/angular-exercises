import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpEvent } from '@angular/common/http';

import { UploadFileService } from 'src/app/upload-file/upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  progress: number = 0;

  files: Set<File>;

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {}

  onChange(event: any) {
    const selectedFiles = <FileList>event.srcElement.files;
    this.files = new Set();
    for (let i=0; i < selectedFiles.length; i++) {
      this.files.add(selectedFiles[i]);
    }
    this.progress = 0;
  }

  //Upload
  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, 'http://localhost:8000/upload')  //porta que esta usando no back-end
        .subscribe((event: HttpEvent<Object>) => {
          if (event.type === HttpEventType.Response) {
            // alert('Upload concluído!');
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total);
            this.progress = percentDone;
          }
        });
    }
  }

  //Download Excel
  onDownloadExcel() {
    this.service.download('http://localhost:8000/downloadExcel')
    .subscribe((res: any) => {
     this.service.handleFile(res, 'report.xlsx');
    });
  }

  //Download PDF
  onDownloadPDF() {
    this.service.download('http://localhost:8000/downloadPDF')
    .subscribe((res: any) => {
     this.service.handleFile(res, 'report.pdf');
    });
  }
}
