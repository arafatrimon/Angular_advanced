import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images: string[] = ['../../assets/buger.jpg','../../assets/2.jpg']; // Array of Base64-encoded image strings

  imageUploads: any[] = [];

  addImageUpload() {
    this.imageUploads.push({ selectedImages: [] });
  }

  handleFileSelect(event: any, index: number) {
  //  this.imageUploads[index].selectedImages = Array.from(event.target.files);
    const files = event.target.files;
    const imageUpload = this.imageUploads[index];
  
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        imageUpload.selectedImages.push(base64Image);
      
        
      };
     
      reader.readAsDataURL(files[i]);
    }
    console.log(imageUpload);
  }

  uploadImages(index: number) {
    // Implement your image upload logic here for the specific upload index
    const formData = new FormData();
    for (let i = 0; i < this.imageUploads[index].selectedImages.length; i++) {
      formData.append('images', this.imageUploads[index].selectedImages[i]);
      console.log(formData);
      
    }

    

    // Perform the upload request to the server for the specific upload index
    // Example using HttpClient:
    // this.http.post('your-upload-api-url', formData).subscribe(response => {
    //   // Handle the response
    // });
  }

  
}