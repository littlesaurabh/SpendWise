import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { FirebaseDataService } from "../services/firebase-data.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.css"],
})
export class DetailsPage implements OnInit {
  contents;

  data;
  index: number = 0;
  len;
  item;
  errorMsg;
  code;
  courseName;
  chapterName;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fds: FirebaseDataService,
    private storage: AngularFireStorage
  ) {
    this.route.queryParams.subscribe((res) => {
      this.contents = JSON.parse(res.value);
     
      this.data = JSON.parse(res.data);
      this.courseName = res.courseName;
      // this.items = this.contents['description']
    });
  }

  ngOnInit() {
    this.item = this.contents["description"][this.index];
    console.log(this.contents);
    this.chapterName = this.contents.chapter;

    console.log("data", this.data);
    console.log("contents", this.contents);
    console.log("item", this.item, this.index);
    // this.loadCode(this.courseName,this.chapterName,this.item[3].value)
    this.loadCurrentItem(this.index);
  }

  loadCurrentItem(index) {
    this.item = this.contents["description"][this.index];
    console.log(this.index);

    let codeindex = -1;

    for (let i = 0; i < this.contents["description"].length; i++) {
      console.log(this.contents["description"] )
      if (this.contents["description"][this.index].content[i].type === "code") {
        codeindex = i;
        break;
      }
    }
    console.log("url", this.item.content[3].value);
    console.log(codeindex)
    if (codeindex != -1) {
      this.loadCode(
        this.courseName,
        this.chapterName,
        this.item.content[codeindex].value
      );
    }
  }

  nextItem() {
    if (this.index < this.contents.description.length) {
      this.index++;
      this.loadCurrentItem(this.index);
    }
  }

  backItem() {
    if (this.index > 0) {
      this.index--;
      this.loadCurrentItem(this.index);
    }
  }

  loadCode(course, chapter, file) {
    this.fds.loadingPresent()
    const path = `${course}/${chapter}/${file}`;
    console.log(path);
    const storageRef = this.storage.ref(path);

    storageRef.getDownloadURL().subscribe(
      (res) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = "text";
        xhr.onload = (e) => {
          this.fds.loadingDismiss();
          this.code = xhr.response;
        };
        xhr.open("GET", res);
        xhr.send();
      },
      (err) => {
        
        console.log(err);
      }
    );
  }

  goBack() {
    this.location.back();
  }

  back(index) {
    this.index = index - 1;
    this.contents = this.data.filter((s) => s.index == this.index)[0];
  }

  next(index) {
    this.index = index + 1;
    this.contents = this.data.filter((s) => s.index == this.index)[0];
  }
}
