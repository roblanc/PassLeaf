function generatePassword(length) {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10) || 12;
    document.getElementById('password').value = generatePassword(length);
});

document.getElementById('copy').addEventListener('click', () => {
    const pwd = document.getElementById('password');
    pwd.select();
    pwd.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand('copy');
});
