(() => {
    class SecretFile{
        secretMessage(){
            console.log("Shhhhh....");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();
})();