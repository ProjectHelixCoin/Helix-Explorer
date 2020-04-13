
import React from 'react';

import Card from './Card';

const CardExchanges = () => (
  //@todo move this to config to avoid conflicts
  <Card title="Exchanges">
    <a href="https://txbit.io/Trade/HLIX/BTC" target="_blank" rel="nofollow noopener">Txbit.io</a><br />
    <a href="https://crex24.com/exchange/HLIX-BTC" target="_blank" rel="nofollow noopener">Crex24</a><br />
    <a href="https://graviex.net/markets/bwkbtc/" target="_blank" rel="nofollow noopener">Graviex</a><br />
    <a href="https://midas.investments/exchange/HLIX/BTC" target="_blank" rel="nofollow noopener">Midas Exchange</a><br />
    <a href="https://blocknet.co/" target="_blank" rel="nofollow noopener">Blocknet</a><br />
    <a href="https://bastionex.com/" target="_blank" rel="nofollow noopener">Bastion</a><br />
  </Card>
);

export default CardExchanges;
