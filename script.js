function generatePassword(length) {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value, 10) || 12;
    document.getElementById('password').value = generatePassword(length);
});

document.getElementById('copy').addEventListener('click', async () => {
    const pwd = document.getElementById('password').value;
    try {
        await navigator.clipboard.writeText(pwd);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});
