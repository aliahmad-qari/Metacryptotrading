const bcrypt = require('bcryptjs');

const hash = '$2a$12$S3hmBcz8PfXcUhuXVCUgxeaC1js1uDQTpqmuq8QZeUKh92dLMP.Qq';
const password = 'admin123';

bcrypt.compare(password, hash, (err, res) => {
    if (err) {
        console.error('Error comparing:', err);
    } else {
        console.log(`Password "${password}" matches hash: ${res}`);
    }
});
