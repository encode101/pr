import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: '[app-server]',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    blogTitle: string = 'Google';
    serverStatus: boolean = false;
    serverStatusText = "No Server Was Created";
    serverName: string;

    createServer = () => {
        this.serverStatus = !this.serverStatus;
        if (this.serverStatus) {
            this.serverStatusText = "Server Was Not Created";
        } else {
            this.serverStatusText = "Server Was Created";
        }
    }

    createNewServer(e: any){
        this.serverName = e.target.value;
    }

}

