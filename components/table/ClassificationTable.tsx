import React from 'react'

const ClassificationTable = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-16 text-gray-700">
      <div className="max-w-6xl flex flex-col space-y-0 items-center mx-6 md:mx-32 lg:mx-72 ">
        <div className="w-full flex space-x-4 bg-white ring-1 rounded-sm ring-gray-200 ">
          <div className="bg-green-600 w-2 rounded-sm" />
          <h2 className="font-bold text-2xl px-3 py-2 text-center md:items-start">
            Classificação - A.F Braga Pró-Nacional Série A - 2021/2022
          </h2>
        </div>
        <div className="w-full rounded-sm ring-1 ring-gray-200 p-2 bg-white">
          <table className="w-full text-center">
            <thead>
              <tr className="border-separate border-t-2 border-b-2 border-gray-200 font-bold text-sm md:text-base">
                <th>Posição</th>
                <th>Equipa</th>
                <th>P</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>GM</th>
                <th>GS</th>
                <th>DG</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              <tr className="bg-green-300">
                <td>1</td>
                <td>Dumiense/CJP II</td>
                <td>70</td>
                <td>26</td>
                <td>22</td>
                <td>4</td>
                <td>0</td>
                <td>54</td>
                <td>11</td>
                <td>+43</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Santa Maria F.C</td>
                <td>49</td>
                <td>26</td>
                <td>14</td>
                <td>7</td>
                <td>5</td>
                <td>45</td>
                <td>26</td>
                <td>+19</td>
              </tr>
              <tr>
                <td>3</td>
                <td>F.C Marinhas</td>
                <td>46</td>
                <td>26</td>
                <td>14</td>
                <td>4</td>
                <td>8</td>
                <td>39</td>
                <td>27</td>
                <td>+12</td>
              </tr>
              <tr>
                <td>4</td>
                <td>G.D Prado</td>
                <td>43</td>
                <td>26</td>
                <td>12</td>
                <td>7</td>
                <td>7</td>
                <td>44</td>
                <td>38</td>
                <td>+6</td>
              </tr>
              <tr>
                <td>5</td>
                <td>S.C Cabreiros</td>
                <td>43</td>
                <td>26</td>
                <td>12</td>
                <td>7</td>
                <td>7</td>
                <td>38</td>
                <td>26</td>
                <td>+12</td>
              </tr>
              <tr>
                <td>6</td>
                <td>G.D Porto D´Ave</td>
                <td>43</td>
                <td>26</td>
                <td>12</td>
                <td>7</td>
                <td>7</td>
                <td>39</td>
                <td>30</td>
                <td>+9</td>
              </tr>
              <tr>
                <td>7</td>
                <td>F.C Amares</td>
                <td>34</td>
                <td>26</td>
                <td>10</td>
                <td>4</td>
                <td>12</td>
                <td>45</td>
                <td>45</td>
                <td>0</td>
              </tr>
              <tr>
                <td>8</td>
                <td>S. Paio D`Arcos F.C</td>
                <td>30</td>
                <td>26</td>
                <td>8</td>
                <td>6</td>
                <td>12</td>
                <td>33</td>
                <td>34</td>
                <td>-1</td>
              </tr>
              <tr>
                <td>9</td>
                <td>A.D Ninense</td>
                <td>30</td>
                <td>26</td>
                <td>9</td>
                <td>3</td>
                <td>14</td>
                <td>39</td>
                <td>48</td>
                <td>-9</td>
              </tr>
              <tr>
                <td>10</td>
                <td>A.F.C Martim</td>
                <td>29</td>
                <td>26</td>
                <td>7</td>
                <td>8</td>
                <td>11</td>
                <td>25</td>
                <td>32</td>
                <td>-7</td>
              </tr>
              <tr className="bg-red-400">
                <td>11</td>
                <td>G.D.R Esporões</td>
                <td>29</td>
                <td>26</td>
                <td>7</td>
                <td>8</td>
                <td>11</td>
                <td>26</td>
                <td>39</td>
                <td>-13</td>
              </tr>
              <tr className="bg-red-300">
                <td>12</td>
                <td>U.D Vila Chã</td>
                <td>28</td>
                <td>26</td>
                <td>8</td>
                <td>4</td>
                <td>14</td>
                <td>36</td>
                <td>43</td>
                <td>-7</td>
              </tr>
              <tr className="bg-red-300">
                <td>12</td>
                <td>S.C Ucha</td>
                <td>19</td>
                <td>26</td>
                <td>5</td>
                <td>4</td>
                <td>17</td>
                <td>26</td>
                <td>57</td>
                <td>-31</td>
              </tr>
              <tr className="bg-red-300">
                <td>13</td>
                <td>G.F.C Pousa</td>
                <td>15</td>
                <td>26</td>
                <td>4</td>
                <td>3</td>
                <td>19</td>
                <td>20</td>
                <td>53</td>
                <td>-33</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-6 flex flex-col space-y-2">
          <div className="flex space-x-6 items-center text-xs md:text-base">
            <span className="w-4 h-4 bg-green-300 rounded-md" />
            <p>Qualificação - Apuramento de Campeão</p>
          </div>
          <div className="flex space-x-6 items-center text-xs md:text-base">
            <span className="w-4 h-4 bg-red-400 rounded-md" />
            <p>Possível Despromoção - Através das descidas via CP</p>
          </div>
          <div className="flex space-x-6 items-center text-xs md:text-base">
            <span className="w-4 h-4 bg-red-300 rounded-md" />
            <p>Despromoção</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassificationTable
