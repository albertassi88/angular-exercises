import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string) {

    const formData = new FormData(); //para receber o arquivo
    files.forEach(file => formData.append('file', file, file.name));

    //Forma 1 de fazer

    // const request = new HttpRequest('POST', url, formData)  //modo diferente de fazer a requisição, caso queira pode ser feito pelo http.post()
    // return this.http.request(request);


    //Forma 2 de fazer
    return this.http.post(url, formData, {
      observe: 'events',
      reportProgress: true
    });
  }

  //download
  download(url: string) {
    return this.http.get(url, {
      responseType: 'blob' as 'json'
      //reportProgress - caso queira mostrar a %, o back-end tem que colocar o content-length para isso
    })
  }

  //download
  handleFile(res: any, fileName: string) {
      const file = new Blob([res], {
        type: res.type
      });
      const blob = window.URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = blob;
      link.download = fileName;
      //link.click();
      link.dispatchEvent(new MouseEvent('click', { //para funcionar no firefox
        bubbles: true,
        cancelable: true,
        view: window
      }));
      setTimeout(() => { //para firefox
        window.URL.revokeObjectURL(blob);
        link.remove();
      }, 100);
  }
}
