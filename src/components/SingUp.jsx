const SingUp = () => {
    return (
        <>
        <div className="singup-container">
            <aside>
                
            </aside>
            <main>
                <div className="singup-main">
                    <h1>Cadastro</h1>
                    <h2>Comece sem pagar nada</h2>
                    <div className="singup-input">
                        <div className="input">

                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email"/>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password"/>
                        </div>
                        <div className="checkbox">

                        <input type="checkbox" name="check" id="check" />
                        <label htmlFor="check"><strong>Ao criar uma conta significa que você concorda com nossos Temos de Serviço e Política de Privacidade</strong> </label>
                        </div>
                        
                        <button>Cadastrar</button>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default SingUp