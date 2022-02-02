import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  latestNews: any = []

  constructor(public http: HttpClient, public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("get news")
    this.loadingController.create({
      message: 'Please wait...',
    }).then(res => {
      res.present();
    })

    this.getNews().then((res: any) => {
      console.log("latest news", res.articles)
      this.latestNews = res.articles
      this.loadingController.dismiss()

    }).catch(err => {
      this.loadingController.dismiss()
      console.log("err", err)
    })

  }

  getNews() {
    return new Promise((resolve, reject) => {

      this.http.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=1848b5465b1449d78d10c2991b1bea98").subscribe((res: any) => {
        resolve(res)
        console.log("res", res)
      }, (err) => {
        console.log("login failed" + JSON.stringify(err))
        reject(err);
        alert(err.message)

        

      });
    });

  }



}
