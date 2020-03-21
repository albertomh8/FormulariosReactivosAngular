import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  user: FormGroup;
  constructor(private _fb: FormBuilder) {}

  private validateApellido(control: AbstractControl) {
    var apellido = control.value;
    var error = null;
    if (!apellido.includes("Perez")) {
      error = "El apellido debe incluir Perez";
    }
    return error;
  }

  createForm() {
    this.user = this._fb.group({
      nombre: ["", Validators.required],
      apellidos: ["", this.validateApellido],
      edad: ["", [Validators.required, Validators.min(18), Validators.max(65)]],
      email: ["", Validators.email]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}
