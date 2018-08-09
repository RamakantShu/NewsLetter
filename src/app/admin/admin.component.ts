import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpRequest, HttpEventType} from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  angForm: FormGroup;
  title="";
  newsContent="";
  newsProfileImage=null;

  public progress: number;
  public message: string;

  constructor(
    private router: Router, 
    private fb: FormBuilder,
    private http:HttpClient
  ) 
  { 
    this.angForm=fb.group({
      title:['', Validators.required],
      newsContent:['', Validators.required],
      newsProfileImage:['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onImageSelected(files)
  {
    this.newsProfileImage=files;
  }

  SaveNewsContent(e)
  {
    if (this.newsProfileImage.length === 0)
      return;
      const formData = new FormData();

      //for (let file of this.newsProfileImage)
      //  formData.append(file.name, file);
      formData.append("file1", "newsProfileImage");
      formData.append("title", "Ramakant testing data");
      formData.append("newsContent", "Ramakant testing Content please");
  
      const uploadReq = new HttpRequest('POST', 'api/upload', formData, {
        reportProgress: true,
      });
  
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response)
          this.message = event.body.toString();
      });
    // debugger;
    // e.preventDefault();
    // const fd=new FormData();
    // fd.append('newsProfileImage', this.newsProfileImage, this.newsProfileImage.name);
    // fd.append('title', 'RAmakant');
    // this.http.post('/api/admin/', fd)
    // .subscribe(event=>{
    //   alert(2);
    // })
    // alert(this.title);
  }

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: 'v1/images', // if needed
    customClasses: [ // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };
}
