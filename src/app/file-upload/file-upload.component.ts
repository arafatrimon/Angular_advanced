import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {


 

  ngOnInit(): void {
  }
//   myImage!:Observable<any>;
//   base64Code:any;
//   onChange=($event:Event)=>{
// const target=$event.target as HTMLInputElement;
// const file:File= (target.files as FileList)[0];
// console.log(file);
// this.conertToBase64(file);
//   }
//   conertToBase64(file: File) {
//     const observable=new Observable((subscriber:Subscriber<any>)=>{
//       this.readFile(file,subscriber)
//     })
//   }
//   readFile(file: File, subscriber: Subscriber<any>) {
//    const fileReader=new FileReader();
//    fileReader.readAsDataURL(file);
//    fileReader.on
//   }

base64String:any;

// onFileSelected(event: any) {
//   const file: File = event.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = () => {
//     const base64 = reader.result as string;
//     console.log(base64);
//     this.base64String=base64;
//   };

constructor(private http: HttpClient) {}



// onFileSelected(event: any) {
//   const files: File[] = event.target.files;
//   console.log(files);

//   for (const file of files) {
//     const formData = new FormData();
//     formData.append('file', file);

//     this.http.post('https://example.com/upload', formData).subscribe(
//       (response) => {
//         console.log(response);
//         // TODO: Handle the server response
//       },
//       (error) => {
//         console.error(error);
//         // TODO: Handle the error
//       }
//     );
//   }
// }

img:any[]=[];

onFileSelected(event: any) {
  const files: File[] = event.target.files;
  console.log(files);

  const fileReaders = [];
  for (const file of files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReaders.push(fileReader);
  }


  Promise.all(fileReaders.map((fileReader) => new Promise((resolve, reject) => {
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  }))).then((base64Strings) => {
    console.log(base64Strings);
    this.img=base64Strings;
    // TODO: Use the base64 strings
  }).catch((error) => {
    console.error(error);
    // TODO: Handle the error
  });
}

}
