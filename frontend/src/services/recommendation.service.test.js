import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toHaveLength(1);
    const product = recommendations[0];
    expect(product.name).toBe('RD Conversas');
    expect(product.score).toBeGreaterThan(0);
    expect(product.relevanceLevel).toBeDefined();
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toHaveLength(2);

    const names = recommendations.map((product) => product.name);
    expect(names).toEqual(['RD Station CRM', 'RD Station Marketing']);

    recommendations.forEach((product) => {
      expect(product.score).toBeGreaterThan(0);
      expect(product.relevanceLevel).toBeDefined();
    });
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail', 'Automação de marketing'],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toHaveLength(1);
    const product = recommendations[0];
    expect(product.name).toBe('RD Station Marketing');
    expect(product.score).toBeGreaterThan(0);
    expect(product.relevanceLevel).toBeDefined();
  });

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toHaveLength(1);
    const product = recommendations[0];
    expect(product.name).toBe('RD Conversas');
    expect(product.score).toBeGreaterThan(0);
    expect(product.relevanceLevel).toBeDefined();
  });
});
