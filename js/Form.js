class Form {

  constructor() {
    this.input = createInput("First Name");
    this.input1 = createInput("Last Name")
    this.input2 = createInput("State");
    this.input3 = createInput("City");
    this.input4 = createInput("Pin Code");
    this.input5 = createInput("Phone number");
    this.input6 = crateInput("Gender");
    this.input7 = createInput("Academic status");
    this.input8 = createInput("Email id");
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
  }

  display(){
    var title = createElement('h2')
    title.html("Form Registration");
    title.position(130, 0);

    this.input.position(130, 160);
    this.input1.position(130, 170);
    this.input2.position(130, 180);
    this.input3.position(130, 190);
    this.input4.position(130, 200);
    this.input5.position(130, 210);
    this.input6.position(130, 220);
    this.input7.position(130, 230);
    this.input8.position(130, 240);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.greeting.html("Registration done !!! ")
      this.greeting.position(130, 100);
    });

  }
}
