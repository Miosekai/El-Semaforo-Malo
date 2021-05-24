
let carropasandoList = [];

class CarroPasando {

constructor (x,y,distX,dist){

    this.x = 75;
    this.y = 375;
    this.dist = 10;
    this.dist=dist;
   
}

pintar(){

    noStroke();
    fill(3, 116, 140);
    
    rect(this.x - 10, this.y - 10, 25, 15);
    rect(this.x - 10, this.y + 35, 25, 15);
    rect(this.x + 36, this.y - 10, 25, 15);
    rect(this.x + 36, this.y + 35, 25, 15);
    
    fill(10, 24, 27);
    rect(this.x, this.y, 50, 40);


}

catcher(){

    for(let i = 0; i < carropasandoList.length; i++)
    {
        if(i%2 == 0)
        {
            this.distX = (this.x + (dist + 30) + (i * dist));
        }
        else
        {
            this.distX = (this.x - (dist - (-20)) - (i * dist));
        }
        carropasandoList[i].pintar(app);
    }
}



getX() {
    return this.x;
}

setX(x) {
  
    this.x = x;
}

getY() {
    return this.y;
}

setY(y) {

    this.y = y;
}



}