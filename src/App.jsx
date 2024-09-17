import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Progress } from './components/ui/progress';

function App() {
  const [votesKamala, setVotesKamala] = useState(0);
  const [votesTrump, setVotesTrump] = useState(0);

  const totalVotes = votesKamala + votesTrump;

  const percentKamala = totalVotes ? ((votesKamala / totalVotes) * 100).toFixed(1) : 0;
  const percentTrump = totalVotes ? ((votesTrump / totalVotes) * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-8">Enquete: Kamala vs Trump</h1>
        <div className="flex flex-col md:flex-row justify-around items-center mb-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kamala_Harris_Vice_Presidential_Portrait.jpg/230px-Kamala_Harris_Vice_Presidential_Portrait.jpg"
              alt="Kamala Harris"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              onClick={() => setVotesKamala(votesKamala + 1)}
            >
              Votar em Kamala
            </Button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
              alt="Donald Trump"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
              onClick={() => setVotesTrump(votesTrump + 1)}
            >
              Votar em Trump
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-lg font-medium mb-2">Kamala Harris: {percentKamala}%</p>
            <Progress value={percentKamala} className="h-4" />
          </div>
          <div>
            <p className="text-lg font-medium mb-2">Donald Trump: {percentTrump}%</p>
            <Progress value={percentTrump} className="h-4" />
          </div>
        </div>
        <p className="text-center text-gray-600 mt-8">Total de votos: {totalVotes}</p>
      </Card>
    </div>
  );
}

export default App;
