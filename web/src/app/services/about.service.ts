
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { aboutmodel } from '../models/about';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
    // subject = new Subject();
    // document = new Subject();
     ApiErrors = new Subject();
     getdocument= new Subject();
    private aboutdetails: aboutmodel[] = [];
  private aboutdetails$ = new Subject< aboutmodel []>();
  readonly url = "http://localhost:3000/documents";
    postId: any;
      constructor(private http:HttpClient) { }
//
addDocument(title:any,body:any,document:Blob
    ): void {
  console.log(title)
  console.log(body)
    const DocumentData = new FormData();
    DocumentData.append("title",title);
    DocumentData.append("body",body);
    DocumentData.append("document", document, title);
   console.log(DocumentData)
const dataArr=[]
dataArr.push(title)
dataArr.push(body)
dataArr.push(document)
console.log(dataArr)
    this.http
      .post<{ document: aboutmodel }>(this.url, DocumentData)
      .subscribe((DocumentData) => {
        const document: aboutmodel = {
          title:title,
          body: body,
          documentPath: DocumentData.document.documentPath
        };
        this.aboutdetails.push(document);
        this.aboutdetails$.next(this.aboutdetails);
      });
}
//
// getProfiles() {
//   this.http
//     .get<{ profiles: aboutmodel[] }>('http://localhost:3000/documents/getdocuments')
//     .pipe(
//       map((DocumentData) => {
//         return DocumentData.profiles;
//       })
//     )
//     .subscribe((profiles) => {
//       this.aboutdetails = profiles;
//       this.aboutdetails$.next(this.aboutdetails);
//     });
// }
// getProfilesStream() {
//   return this.aboutdetails$.asObservable();
// }
getdocuments(){
  this.http.get(`http://localhost:3000/documents`).subscribe((data)=>{
      this.getdocument.next(data);
  },(error)=>this.ApiErrors.next(error));
}
}