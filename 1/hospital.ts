// basic class for person that represent the basic for specific people 

abstract class Person {
  protected firstName: string;
  protected lastName: string;
  protected age: number;
  protected address: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  abstract info(): void;
}

// class for patient 

class Patient extends Person {
  private patientId: number;
  private phoneNumber: number;
  private medicalHistory: Appointment[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    patientId: number,
    phoneNumber: number
  ) {
    super(firstName, lastName, age, address);
    this.patientId = patientId;
    this.phoneNumber = phoneNumber;
    this.medicalHistory = [];
  }

  getPatientId(): number {
    return this.patientId;
  }

  setPatientId(patientId: number): void {
    this.patientId = patientId;
  }

  getPhoneNumber(): number {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: number): void {
    this.phoneNumber = phoneNumber;
  }

  getMedicalHistory(): Appointment[] {
    return this.medicalHistory;
  }

  addMedicalHistory(appointment: Appointment): void {
    this.medicalHistory.push(appointment);
  }

  info(): void {
    console.log(`Patient : ${this.getFullName()} \nID : ${this.patientId}`);
  }
}

// class for medical staff

class MedicalStaff extends Person {
  private staffId: number;
  private department: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    staffId: number,
    department: string
  ) {
    super(firstName, lastName, age, address);
    this.staffId = staffId;
    this.department = department;
  }

  getStaffId(): number {
    return this.staffId;
  }

  setStaffId(staffId: number): void {
    this.staffId = staffId;
  }

  getDepartment(): string {
    return this.department;
  }

  setDepartment(department: string): void {
    this.department = department;
  }

  info(): void {
    console.log(
      `Medical Staff : ${this.getFullName()} \nStaff ID : ${
        this.staffId
      }\nDepartment : ${this.department}`
    );
  }
}

// class for doctor

class Doctor extends MedicalStaff {
  private doctorId: number;
  private specialization: string;
  private availability: string[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    address: string,
    doctorId: number,
    specialization: string
  ) {
    super(firstName, lastName, age, address, doctorId, specialization);
    this.doctorId = doctorId;
    this.specialization = specialization;
    this.availability = [
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
    ];
  }

  get getDoctorId(): number {
    return this.doctorId;
  }

  set getDoctorId(doctorId: number) {
    this.doctorId = doctorId;
  }

  get doctorSpecialization(): string {
    return this.specialization;
  }

  set doctorSpecialization(specialization: string) {
    this.specialization = specialization;
  }

  get doctorAvailability():string[] {
    return this.availability;
  }


  info(): void {
    console.log(
      `Doctor : ${this.getFullName()} \nSpecialization : ${
        this.specialization
      }\nId : ${this.doctorId}`
    );
  }
}

// class for appointment

class Appointment {
  private _dateOfAppointment: Date;
  private _timeOfAppointment: string;
  private _doctor: Doctor;
  private _patient: Patient;

  constructor(timeOfAppointment: string, doctor: Doctor, patient: Patient) {
    this._dateOfAppointment = new Date();
    this._timeOfAppointment = timeOfAppointment;
    this._doctor = doctor;
    this._patient = patient;
  }

  get dateOfAppointment(): Date {
    return this._dateOfAppointment;
  }

  get timeOfAppointment(): string {
    return this._timeOfAppointment;
  }

  get doctor(): Doctor {
    return this._doctor;
  }

  get patient(): Patient {
    return this._patient;
  }

  appointmentInfo(): void {
    const message = `Doctor : ${this._doctor.getFullName()} \nSpecialization : ${this._doctor.doctorSpecialization}\nId : ${this._doctor.getDoctorId} \nPatient : ${this._patient.getFullName()} \nID : ${this._patient.getPatientId()} \nDate: ${
      this._dateOfAppointment
    } \nTime: ${this._timeOfAppointment}`;
    console.log(message);
  }
}

// class for hospital

class Hospital {
  private _name: string;
  private _patients: Patient[];
  private _doctors: Doctor[];
  private _appointments: Appointment[];

  constructor(name: string) {
    this._name = name;
    this._patients = [];
    this._doctors = [];
    this._appointments = [];
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  addPatient(patient: Patient): void {
    if (
      !this._patients.some((p) => p.getPatientId() === patient.getPatientId())
    ) {
      this._patients.push(patient);
    } else {
      console.log(`Patient with ID ${patient.getPatientId()} already exists.`);
    }
  }

  addDoctor(doctor: Doctor): void {
    if (!this._doctors.some((d) => d.getDoctorId === doctor.getDoctorId)) {
      this._doctors.push(doctor);
    } else {
      console.log(`Doctor with ID ${doctor.getDoctorId} already exists.`);
    }
  }

  addAppointment(appointment: Appointment): void {
    this._appointments.push(appointment);
  }

  printAllAppointments(): void {
    this._appointments.forEach((appointment) => {
      appointment.appointmentInfo();
    });
  }

  printAppointmentsByDoctorId(id: number): void {
    const doctorAppointments = this._appointments.filter(
      (appointment) => appointment.doctor.getDoctorId === id
    );
    if (doctorAppointments.length === 0) {
      console.log(`No appointments found for doctor with ID ${id}.`);
    } else {
      doctorAppointments.forEach((appointment) => {
        appointment.appointmentInfo();
      });
    }
  }

  printAppointmentsByPatientId(id: number): void {
    const patientAppointments = this._appointments.filter(
      (appointment) => appointment.patient.getPatientId() === id
    );
    if (patientAppointments.length === 0) {
      console.log(`No appointments found for patient with ID ${id}.`);
    } else {
      patientAppointments.forEach((appointment) => {
        appointment.appointmentInfo();
      });
    }
  }

  printAppointmentByCurrDate(): void {
    const currDate = new Date();
    this._appointments.forEach((appointment) => {
      const appointmentDate = appointment.dateOfAppointment;
      if (
        appointmentDate.getFullYear() === currDate.getFullYear() &&
        appointmentDate.getMonth() === currDate.getMonth() &&
        appointmentDate.getDate() === currDate.getDate()
      ) {
        appointment.appointmentInfo();
      }
    });
  }
}


// create object of patient

const patient = new Patient(
  "Yonathan",
  "Wiesel",
  23,
  "eli hackmen 19",
  768276847,
  3987934875439
);

// create object for doctor

const doctor = new Doctor(
  "Alex",
  "Cohen",
  45,
  "harar beret 32",
  18657438694,
  "children"
);

// create appointment object

const appointment = new Appointment("10:30", doctor, patient);

// create object for hospital

const hospital = new Hospital("My Hospital");


// use the hospital methods

hospital.addPatient(patient);
hospital.addPatient(patient);
hospital.addDoctor(doctor);
hospital.addDoctor(doctor);
hospital.addAppointment(appointment);

console.log("Print All");
hospital.printAllAppointments();
console.log();

console.log("Print By Doctor Id");
hospital.printAppointmentsByDoctorId(doctor.getDoctorId);
console.log();

console.log("Print By Patient Id");
hospital.printAppointmentsByPatientId(patient.getPatientId());
console.log();

console.log("Print By Current Date");
hospital.printAppointmentByCurrDate();
