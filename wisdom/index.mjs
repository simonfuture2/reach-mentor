import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const role = 'student';
console.log('Membership role as ${role}');

const stdlib = loadStdlib(process.env);
console.log('Thank you for supporting ${stdlib.connector}.');

const commonInteract = {};

// Student
if (role == 'student') {
    const studentInteract = {
        ...commonInteract
    };

const acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
const ctc = acc.contract(backend);
await ctc.participants.Student(studentInteract);

// Mentor
} else {
    const mentorInteract = {
        ...commonInteract,
    };

};
