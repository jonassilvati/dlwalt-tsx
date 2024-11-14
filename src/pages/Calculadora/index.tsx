import React, {useEffect, useState} from "react";

import Footer from "../components/Footer";
import BannerHeading from "../components/BannerHeading";
import Navbar from "../components/Navbar";
import TextField from "../components/TextField";
import AddressAutocomplete from "../components/AddressAutocomplete";
import './calculadora.css';
import {Address} from "../components/AddressAutocomplete";
import Select from "../components/Select";

type Location = 'home' | 'business' | 'agro' | 'off';

interface CalcResult{
  potenciaInstalada: number;
  areaMinima: number;
  valor: number;
  producao: number;
  economia: number;
  tempoRetorno: number;
}

const Calculadora = () => {
  const [ location, setLocation ] = useState<Location>();
  const [ address, setAddress ] = useState<Address>();
  const [ priceAccount, setPriceAccount ] = useState<string>('');
  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');
  const [ referral,  setReferral ] = useState<string>('');
  const [ calcResult, setCalcResult ] = useState<CalcResult | null>(null);
  
  
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = (Number(numericValue) / 100)
      .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      .replace('R$', ''); 
      
    return formattedValue.trim();
  };

  const handlePrecoConta = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;
    setPriceAccount(formatCurrency(rawValue));
  };

  const handleCalc = () => {
    const tarifaKWh = 0.8;
    const custoWatt = 2.5;
    const gastoMensal = Number(priceAccount.replace(/\D/g, '')) / 100;
    const potenciaInstalada = gastoMensal / tarifaKWh;
    const valor = potenciaInstalada * custoWatt;
    const economia = gastoMensal * 12 * tarifaKWh;
    const producao = (potenciaInstalada * 4) / 1000;
    const areaMinima = (potenciaInstalada * 6) / 1000;
    const tempoRetorno = valor / economia;

    setCalcResult({
      potenciaInstalada,
      areaMinima,
      valor,
      producao,
      economia,
      tempoRetorno
    })
  }

  return (
    <div className="body-inner">
      <Navbar />
      <BannerHeading title="Calculadora Solar" />
      <section id="main-container" className="main-container pb-2">
        <div className="container">
          <h2 style={{display: 'block', textAlign: 'center', marginBottom: 64}}>Simulador de energia solar DWalt</h2>
          
          { calcResult === null &&
            <>
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                  <span className="calc-title-item d-block text-center">1. Qual o local de instalação do gerador?</span>
                  <div className="location-options">
                      <button className={`location-button ${location == 'home' ? 'active' : ''}`} onClick={() => setLocation('home')}>
                        <div className="location-icon-wrapper">
                          <img src='images/calculadora/house.png' alt="" />
                        </div>
                        <span>Residencial</span>
                      </button>
                      <button className={`location-button ${location == 'business' ? 'active' : ''}`} onClick={() => setLocation('business')}>
                        <div className="location-icon-wrapper">
                          <img src="images/calculadora/residential.png" alt="" />
                        </div>
                        <span>Empresarial</span>
                      </button>
                      <button className={`location-button ${location == 'agro' ? 'active' : ''}`} onClick={() => setLocation('agro')}>
                        <div className="location-icon-wrapper">
                          <img src="images/calculadora/barn.png" alt="" />
                        </div>
                        <span>Agronegócio</span>
                      </button>
                      <button className={`location-button ${location == 'off' ? 'active' : ''}`} onClick={() => setLocation('off')}>
                        <div className="location-icon-wrapper">
                          <img src="images/calculadora/solar-energy.png" alt="" />
                        </div>
                        <span>Sem conexão com a rede eletrica</span>
                      </button>
                  </div>
              </div>
            </div>

            <div className="row justify-content-center mt-3 mb-5">
              <div className="col-12 col-md-8">
                <div className="mb-3">
                  <span className="calc-title-item">2. Onde pretende realizar a instalação?</span>
                  <AddressAutocomplete onChange={(address) => setAddress(address)} />
                </div>
                <div className="mb-3">
                  <span className="calc-title-item">3. Quanto é o seu gasto médio mensal com conta de luz?</span>
                  <TextField placeholder="R$ *" value={priceAccount} onChange={(e) => handlePrecoConta(e)}/>
                </div>
                {
                  location && address?.addressLine && Number(priceAccount.replace(/\D/g, '')) > 0  &&
                  <div>
                    <div className="mb-3 mt-5">
                      <p>Insira seus dados abaixo e descubra o custo do seu gerador solar e quanto irá economizar por ano! Em caso de áreas remotas entraremos em contato.</p>
                      <TextField placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <TextField placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                      <Select
                        placeholder="Como você ficou sabendo da DWalt?"
                        value={referral}
                        onChange={(e) => setReferral(e.target.value)} 
                        options={['Anúncios Google', 'Indicação', 'Youtube', 'Facebook', 'Linkedin', 'Instagram']}/>
                      { email && name &&
                      <button className="btn btn-primary mt-5 d-block mx-auto" onClick={handleCalc}>Simular</button>}
                    </div>
                  </div>
                }
              </div>
            </div>
          </>
        }

        { calcResult && 
        <>
          <div className="result-grid">
            <div className="result-grid__item">
              <img src="/images/calculadora/potencia.png" alt="" />
              <span className="item-title">Potência instalada</span>
              <span className="item-value">{calcResult.potenciaInstalada.toLocaleString()} kWp</span>
            </div>
            <div className="result-grid__item">
              <img src="/images/calculadora/area-minima.png" alt="" />
              <span className="item-title">Área mínima necessária</span>
              <span className="item-value">{calcResult.areaMinima.toLocaleString()} m²</span>
            </div>
            <div className="result-grid__item">
              <img src="/images/calculadora/valor-aproximado.png" alt="" />
              <span className="item-title">Valor aproximado do sistema com instalação</span>
              <span className="item-value">{calcResult.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className="result-grid__item">
              <img src="/images/calculadora/producao-mensal.png" alt="" />
              <span className="item-title">Produção mensal</span>
              <span className="item-value">{calcResult.producao.toLocaleString()} kWh/mês</span>
            </div>
            <div className="result-grid__item">
              <img src="/images/calculadora/retorno.png" alt="" />
              <span className="item-title">Economia anual aproximada</span>
              <span className="item-value">{calcResult.economia.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className="result-grid__item">
              <img src="/images/calculadora/tempo-retorno.png" alt="" />
              <span className="item-title">Tempo aproximado de retorno do investimento</span>
              <span className="item-value">{calcResult.tempoRetorno.toLocaleString()} anos</span>
            </div>
          </div>
        </>
        }

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Calculadora;
