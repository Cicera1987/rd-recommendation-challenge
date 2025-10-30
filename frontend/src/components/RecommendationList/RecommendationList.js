import React from 'react';

function RecommendationList({ recommendations }) {
  const relevanceTextMap = {
    high: 'Alta relevância',
    medium: 'Média relevância',
    low: 'Baixa relevância',
  };

  const relevanceColorMap = {
    high: 'bg-green text-blue font-bold',
    medium: 'bg-pink text-white font-semibold',
    low: 'bg-gray text-white font-medium',
  };

  const scoreColorMap = {
    high: 'text-green',
    medium: 'text-pink',
    low: 'text-gray',
  };

  const getRelevanceText = (level) => relevanceTextMap[level];
  const getRelevanceColorClass = (level) => relevanceColorMap[level];
  const getScoreColorClass = (level) => scoreColorMap[level];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-water">
      <h2 className="text-2xl font-bold text-blue mb-6">Recomendações RD Station</h2>

      {recommendations.length === 0 ? (
        <p className="text-gray text-base">
          Nenhuma recomendação encontrada.{' '}
          <span className="text-blue font-medium">Tente ajustar suas preferências!</span>
        </p>
      ) : (
        <div className="max-h-[329px] overflow-y-auto pr-2 scrollbar-hide">
          <ul className="flex flex-col gap-4">
            {recommendations.map((rec, index) => (
              <li
                key={index}
                className="w-full md:min-w-[357px] bg-lightGray p-5 rounded-2xl border border-transparent 
                           hover:border-cyan hover:bg-water transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex w-full justify-between items-center flex-wrap gap-2">
                  <h3 className="text-base md:text-lg font-semibold text-blue">{rec.name}</h3>
                  <span
                    className={`flex px-3 py-1 h-6 text-xs rounded-full ${getRelevanceColorClass(rec.relevanceLevel)}`}
                  >
                    {getRelevanceText(rec.relevanceLevel)}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-gray">
                  <strong>Pontuação:</strong>{' '}
                  <span className={`${getScoreColorClass(rec.relevanceLevel)} font-semibold`}>
                    {rec.score}
                  </span>
                </p>

                {rec.description && (
                  <p className="text-gray mt-2 text-xs md:text-sm leading-relaxed">
                    {rec.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RecommendationList;
