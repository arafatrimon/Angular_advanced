import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-test',
  templateUrl: './file-test.component.html',
  styleUrls: ['./file-test.component.css']
})
export class FileTestComponent implements OnInit {



  ngOnInit(): void {
  }
  // uploadForm: FormGroup;
  // filesArray: File[] = [];

  // constructor(private formBuilder: FormBuilder) {
  //   this.uploadForm = this.formBuilder.group({
  //     fileUploads: [[]] // Array of file inputs
  //   });
  // }

  // onFileChange(event: any) {
  //   const files = event.target.files;
  //   for (let i = 0; i < files.length; i++) {
  //     this.filesArray.push(files[i]);
  //   }
  // }

  // onSubmit() {
  //   // Process the uploaded files here
  //   console.log(this.filesArray);
  // }

  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.uploadForm = this.formBuilder.group({
      fileUploads: this.formBuilder.array([]) // Initialize with an empty FormArray
    });
  }

  get fileUploads(): FormArray {
    return this.uploadForm.get('fileUploads') as FormArray;
  }

  onFileChange(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.fileUploads.push(this.formBuilder.control(files[i]));
    }
  }

  onSubmit() {
    // Process the uploaded files here
    console.log(this.fileUploads.value);
  }

}
