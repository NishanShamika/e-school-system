import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoUploadComponent } from './video-component/video-upload/video-upload.component';
import { PaperUploadComponent } from './pastpaper-component/paper-upload/paper-upload.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { AllProfilesComponent } from './components/all-profiles/all-profiles.component';

import { UpdatePostComponent } from './update-post/update-post.component';
import { VideoPageComponent } from './video-component/video-page/video-page.component';
import { PaperComponent } from './pastpaper-component/paper/paper.component';
import { VideoListComponent } from './video-component/video-list/video-list.component';
import { VideoDetailComponent } from './video-component/video-detail/video-detail.component';
import { VideoCenterComponent } from './video-component/video-center/video-center.component';
import { SafePipe } from './safe.pipe';
//import { PastpapersComponent } from './pastpapers/pastpapers.component';
import { PastpaperListComponent } from './pastpaper-component/pastpaper-list/pastpaper-list.component';
import { PastpaperDetailComponent } from './pastpaper-component/pastpaper-detail/pastpaper-detail.component';
import { PastpaperCenterComponent } from './pastpaper-component/pastpaper-center/pastpaper-center.component';
//import { VideoUploadGrade06Component } from './video-component/video-upload-grade06/video-upload-grade06.component';
import { VideoUploadGradeComponent } from './video-component/video-upload-grade/video-upload-grade.component';
import { VideoPageGradeComponent } from './video-component/video-page-grade/video-page-grade.component';
import { VideodisplayComponent } from './video-component/videodisplay/videodisplay.component';
import { Videodislpay07Component } from './video-component/videodislpay07/videodislpay07.component';
import { Videoupload07Component } from './video-component/videoupload07/videoupload07.component';
import { Videoupload06Component } from './video-component/videoupload06/videoupload06.component';
import { Videoupload8Component } from './video-component/videoupload8/videoupload8.component';
import { Videoupload9Component } from './video-component/videoupload9/videoupload9.component';
import { Videoupload10Component } from './video-component/videoupload10/videoupload10.component';
import { Videoupload11Component } from './video-component/videoupload11/videoupload11.component';
import { Videoddisplay8Component } from './video-component/videoddisplay8/videoddisplay8.component';
import { Videoddisplay9Component } from './video-component/videoddisplay9/videoddisplay9.component';
import { Videoddisplay10Component } from './video-component/videoddisplay10/videoddisplay10.component';
import { Videoddisplay11Component } from './video-component/videoddisplay11/videoddisplay11.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { Grade06paperComponent } from './pastpaper-component/paperDisplaycom/grade06paper/grade06paper.component';
import { Grade07paperComponent } from './pastpaper-component/paperDisplaycom/grade07paper/grade07paper.component';
import { Grade08paperComponent } from './pastpaper-component/paperDisplaycom/grade08paper/grade08paper.component';
import { Grade09paperComponent } from './pastpaper-component/paperDisplaycom/grade09paper/grade09paper.component';
import { Grade10paperComponent } from './pastpaper-component/paperDisplaycom/grade10paper/grade10paper.component';
import { Grade11paperComponent } from './pastpaper-component/paperDisplaycom/grade11paper/grade11paper.component';

import { Paperupload06Component } from './pastpaper-component/paperUploadcom/paperupload06/paperupload06.component';
import { Paperupload07Component } from './pastpaper-component/paperUploadcom/paperupload07/paperupload07.component';
import { Paperupload08Component } from './pastpaper-component/paperUploadcom/paperupload08/paperupload08.component';
import { Paperupload09Component } from './pastpaper-component/paperUploadcom/paperupload09/paperupload09.component';
import { Paperupload10Component } from './pastpaper-component/paperUploadcom/paperupload10/paperupload10.component';
import { Paperupload11Component } from './pastpaper-component/paperUploadcom/paperupload11/paperupload11.component';
//import { VideoComponentComponent } from 'src/app/video-component.component';
//import { PastpaperComponent } from './pastpaper/pastpaper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';

import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PaperdisplayComponent } from './pastpaper-component/paperdisplay/paperdisplay.component';
import { PaperDisComponent } from './pastpaper-component/paper-dis/paper-dis.component';
import { MessagesInboxComponent } from './messages-inbox/messages-inbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Grade06Component } from './videoPaperDisplay/grade06/grade06.component';
import { Grade07Component } from './videoPaperDisplay/grade07/grade07.component';
import { Grade08Component } from './videoPaperDisplay/grade08/grade08.component';
import { Grade09Component } from './videoPaperDisplay/grade09/grade09.component';
import { Grade10Component } from './videoPaperDisplay/grade10/grade10.component';
import { Grade11Component } from './videoPaperDisplay/grade11/grade11.component';
import { AdminService } from './shared/admin.service';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './shared/admin.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminDatailsComponent } from './admin/admin-datails/admin-datails.component';


import { DatePipe} from '@angular/common';
import { Register2Component } from './register2/register2.component';
import { DiscussionPanelComponent } from './discussion-panel/discussion-panel.component';
import { AnnounceCreateComponent } from './announcement/announce-create/announce-create.component';
import { AnnounceViewComponent } from './announcement/announce-view/announce-view.component'

import { McqComponent } from './mcq/mcq.component';
import { McqDeleteComponent } from './mcq/mcq-delete/mcq-delete.component';
import { McqAddComponent } from './mcq/mcq-add/mcq-add.component';
import { McqQuizComponent } from './mcq/mcq-quiz/mcq-quiz.component';
import { McqSubjectsComponent } from './mcq/mcq-subjects/mcq-subjects.component';
import { UserImagesComponent } from './user-images/user-images.component';
import { UserImagesGetComponent } from './user-images-get/user-images-get.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { McqReportHandlerComponent } from './mcq/mcq-report-handler/mcq-report-handler.component';
import { ViewAboutComponent } from './view-about/view-about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnncodeleteComponent } from './announcement/anncodelete/anncodelete.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    AboutComponent,
    HomeComponent,

    DashboardComponent,
    VideoUploadComponent,
    PaperUploadComponent,
    CreateProfileComponent,
    AllProfilesComponent,

    UpdatePostComponent,
    VideoPageComponent,
    PaperComponent,
    VideoListComponent,
    VideoDetailComponent,
    VideoCenterComponent,
    SafePipe,
    //PastpapersComponent,
    PastpaperListComponent,
    PastpaperDetailComponent,
    PastpaperCenterComponent,
    //VideoUploadGrade06Component,
    VideoUploadGradeComponent,
    VideoPageGradeComponent,
    VideodisplayComponent,
    Videodislpay07Component,
    Videoupload07Component,
    Videoupload06Component,
    Videoupload8Component,
    Videoupload9Component,
    Videoupload10Component,
    Videoupload11Component,
    Videoddisplay8Component,
    Videoddisplay9Component,
    Videoddisplay10Component,
    Videoddisplay11Component,
    UploadFilesComponent,
   // VideoComponentComponent,
    //PastpaperComponent,
    UserDetailsComponent,
    Grade06paperComponent,
    Grade07paperComponent,
    Grade08paperComponent,
    Grade09paperComponent,
    Grade10paperComponent,
    Grade11paperComponent,
    Paperupload06Component,
    Paperupload07Component,
    Paperupload08Component,
    Paperupload09Component,
    Paperupload10Component,
    Paperupload11Component,
    SigninComponent,
    SignupComponent,
    PaperdisplayComponent,
    PaperDisComponent,
    MessagesInboxComponent,
    ContactUsComponent,
    UserProfileComponent,
    Grade06Component,
    Grade07Component,
    Grade08Component,
    Grade09Component,
    Grade10Component,
    Grade11Component,
    ResetPasswordComponent,
    AdminDatailsComponent,
    Register2Component,
    DiscussionPanelComponent,
    AnnounceCreateComponent,
    AnnounceViewComponent,

    McqComponent,
    McqDeleteComponent,
    McqAddComponent,
    McqQuizComponent,
    McqSubjectsComponent,
    UserImagesComponent,
    UserImagesGetComponent,
    McqReportHandlerComponent,
    ViewAboutComponent,
    AboutUsComponent,

    AnncodeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgImageSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    NgbModule

  ],
  providers: [DatePipe,AuthService , EventService,AdminService, AuthGuard,AdminGuard,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi: true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
