function generatePassword(length) {

    }
    return result;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10) || 12;
    document.getElementById('password').value = generatePassword(length);
});

