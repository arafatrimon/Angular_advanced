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
  imageUploads: any[] = [];

  totalImages:any[]=[]

  addImageUpload() {
    this.imageUploads.push({ selectedImages: [] });
  }

  handleFileSelect(event: any, index: number) {
    const files = event.target.files;
 
    const imageUpload = this.imageUploads[index];
   
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        imageUpload.selectedImages.push({name:files[i].name,fileType:files[i].type,data:base64Image});  
      };    
      reader.readAsDataURL(files[i]);
    } 
  }

  uploadImages(index: number) {
  
    const formData = new FormData();
    for (let i = 0; i < this.imageUploads[index].selectedImages.length; i++) {
      formData.append('images', this.imageUploads[index].selectedImages[i]); 
      this.totalImages.push(this.imageUploads[index].selectedImages[i].data)

    }
    console.log("this.imageUploads[index].selectedImages[i]"+ this.totalImages);
  }


  getPdfDataUrl(base64Data: string): string {
    debugger
  
    const byteCharacters =  window.atob(base64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    return url;
  }

  openPdfInNewWindow() {
    window.open('../../assets/pdf.pdf', '_blank');
  }

  getImagePdfInfo(src:any){
    
  }
}