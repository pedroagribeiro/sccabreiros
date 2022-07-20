import React from 'react';
import Image from 'next/image';

const ClassificationTable = () => {
  return (
    <div className="flex flex-col rounded-sm shadow-md">
      <div className="h-1 bg-green-600 rounded-t-sm"></div>
      <div className="flex text-white bg-gray-700">
        <p className="text-xs px-6 py-4">
          Campeonato Pró-Nacional A.F Braga - Série A - 2021/2022
        </p>
      </div>
      {/* Para o benjamim */}
      <div className="w-full flex flex-col space-y-6">
        <table className="w-full bg-white">
          <thead className="text-gray-700 text-xs md:text-sm">
            <tr className="h-14 border-b border-gray-200">
              <th className="border-r border-gray-200">Posição</th>
              <th className="border-r border-gray-200">Equipa</th>
              <th className="border-r border-gray-200">Jogos</th>
              <th className="border-r border-gray-200 hidden md:table-cell">
                Vitórias
              </th>
              <th className="border-r border-gray-200 hidden md:table-cell">
                Empates
              </th>
              <th className="border-r border-gray-200 hidden md:table-cell">
                Derrotas
              </th>
              <th className="border-r border-gray-200 hidden md:table-cell">
                +/-
              </th>
              <th>Pontos</th>
            </tr>
          </thead>
          <tbody className="w-full text-sm font-thin">
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">1</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/dumiense.png"
                    alt="dumiense"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">Dumiense/CJP II</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                22
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                0
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +43
              </td>
              <td className="text-center">70</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">2</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/santa_maria_fc.png"
                    alt="santa_maria_fc"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">Santa Maria F.C</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                14
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                5
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +19
              </td>
              <td className="text-center">49</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">3</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/fc_marinhas.png"
                    alt="fc_marinhas"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">F.C Marinhas</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                14
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                8
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +12
              </td>
              <td className="text-center">46</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">4</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/gd_prado.png"
                    alt="gd_prado"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">G.D Prado</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                12
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +6
              </td>
              <td className="text-center">43</td>
            </tr>
            <tr className="border-b border-gray-200 bg-gray-100 font-normal text-green-600">
              <td className="text-center border-r border-gray-200 py-4">5</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/emblema.png"
                    alt="sc_cabreiros"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">S.C Cabreiros</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                12
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +12
              </td>
              <td className="text-center">43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">6</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/gd_porto_dave.png"
                    alt="gd_porto_dave"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">G.D Porto D&apos;Ave</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                12
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                +9
              </td>
              <td className="text-center">43</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">7</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/fc_amares.png"
                    alt="fc_amares"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">F.C Amares</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                10
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                12
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                0
              </td>
              <td className="text-center">34</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">8</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/sao_paio_darcos_fc.png"
                    alt="sao_paio_darcos_fc"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">São Paio D&apos;Arcos F.C</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                8
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                6
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                12
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -1
              </td>
              <td className="text-center">30</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">9</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/ad_ninense.png"
                    alt="ad_ninense"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">A.D Ninense</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                9
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                3
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                14
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -9
              </td>
              <td className="text-center">30</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="text-center border-r border-gray-200 py-4">10</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/afc_martim.png"
                    alt="afc_martim"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">A.F.C Martim</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                8
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                11
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -7
              </td>
              <td className="text-center">29</td>
            </tr>
            <tr className="border-b border-gray-200 text-red-600">
              <td className="text-center border-r border-gray-200 py-4">11</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/gdr_esporoes.png"
                    alt="gdr_esporoes"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">G.D.R Esporões</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                7
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                8
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                11
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -13
              </td>
              <td className="text-center">29</td>
            </tr>
            <tr className="border-b border-gray-200 text-red-600">
              <td className="text-center border-r border-gray-200 py-4">12</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/ud_vila_cha.png"
                    alt="ud_vila_cha"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">U.D Vila Chã</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                8
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                14
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -7
              </td>
              <td className="text-center">28</td>
            </tr>
            <tr className="border-b border-gray-200 text-red-600">
              <td className="text-center border-r border-gray-200 py-4">13</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/sc_ucha.png"
                    alt="sc_ucha"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">S.C Ucha</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                5
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                17
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -31
              </td>
              <td className="text-center">19</td>
            </tr>
            <tr className="border-b border-gray-200 text-red-600">
              <td className="text-center border-r border-gray-200 py-4">14</td>
              <td className="border-r border-gray-200">
                <div className="w-full h-full flex space-x-6 items-center justify-start pl-4">
                  <Image
                    src="/images/oponents/championship/gfc_pousa.png"
                    alt="gfc_pousa"
                    width={23}
                    height={34}
                  />
                  <p className="mx-4">G.F.C Pousa</p>
                </div>
              </td>
              <td className="text-center border-r border-gray-200">26</td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                4
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                3
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                19
              </td>
              <td className="text-center border-r border-gray-200 hidden md:table-cell">
                -33
              </td>
              <td className="text-center">15</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Ja nao é para o Benjamim */}
    </div>
  );
};

export default ClassificationTable;
