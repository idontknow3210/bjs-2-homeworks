//1
function parseCount(a) {
    const b = Number.parseFloat(a);
    if (Number.isNaN(b)) {
        throw new Error ("Невалидное значение");
    } else {
        return b;
    }
    
}
function validateCount(c) {
    try{
        return parseCount(c);
    } catch (error) {
        return error;
    } 

}
//2
class Triangle {
    constructor(a, b, c) {
        if((a+b<c) || (a+c<b) || (b+c<a)) {
            throw new Error("Треугольник с такими сторонами не существует")
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        

    }
    
    get perimeter() {
        let p=this.a + this.b + this.c;
        return p;
    }
    get area() {
        let p=(this.a + this.b + this.c)/2;
        let s=Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return +s.toFixed(3);

    }
    
}
function getTriangle (a, b, c) {
    try {
    return new Triangle(a, b, c);
    } catch(error) {
         
        return {
            get perimeter() {
               return "Ошибка! Треугольник не существует";
            },
            get area() {
               return "Ошибка! Треугольник не существует";
            }
        };

    }


}
