/*
  Device targets from https://github.com/AlessandroAU/ExpressLRS/blob/master/src/platformio.ini

  TODO: it might be a good idea to separate these by device type: TX, RX
*/
export enum DeviceTarget {
  Frsky_TX_R9M_via_STLINK = 'Frsky_TX_R9M_via_STLINK',
  Frsky_TX_R9M_via_stock_BL = 'Frsky_TX_R9M_via_stock_BL',
  Frsky_TX_R9M_via_WIFI = 'Frsky_TX_R9M_via_WIFI',
  Frsky_TX_R9M_LITE_via_STLINK = 'Frsky_TX_R9M_LITE_via_STLINK',
  Frsky_TX_R9M_LITE_via_stock_BL = 'Frsky_TX_R9M_LITE_via_stock_BL',
  Frsky_TX_R9M_LITE_PRO_via_STLINK = 'Frsky_TX_R9M_LITE_PRO_via_STLINK',
  Frsky_RX_R9MM_R9MINI_via_STLINK = 'Frsky_RX_R9MM_R9MINI_via_STLINK',
  Frsky_RX_R9MM_R9MINI_via_BetaflightPassthrough = 'Frsky_RX_R9MM_R9MINI_via_BetaflightPassthrough',
  Frsky_RX_R9SLIMPLUS_via_STLINK = 'Frsky_RX_R9SLIMPLUS_via_STLINK',
  Frsky_RX_R9SLIMPLUS_via_BetaflightPassthrough = 'Frsky_RX_R9SLIMPLUS_via_BetaflightPassthrough',
  Frsky_RX_R9SLIMPLUS_OTA_via_STLINK = 'Frsky_RX_R9SLIMPLUS_OTA_via_STLINK',
  Frsky_RX_R9SLIMPLUS_OTA_via_BetaflightPassthrough = 'Frsky_RX_R9SLIMPLUS_OTA_via_BetaflightPassthrough',
  Frsky_RX_R9MX_via_STLINK = 'Frsky_RX_R9MX_via_STLINK',
  Frsky_RX_R9MX_via_BetaflightPassthrough = 'Frsky_RX_R9MX_via_BetaflightPassthrough',
  Jumper_RX_R900MINI_via_STLINK = 'Jumper_RX_R900MINI_via_STLINK',
  Jumper_RX_R900MINI_via_BetaflightPassthrough = 'Jumper_RX_R900MINI_via_BetaflightPassthrough',
  DIY_900_TX_TTGO_V1_SX127x_via_UART = 'DIY_900_TX_TTGO_V1_SX127x_via_UART',
  DIY_900_TX_TTGO_V2_SX127x_via_UART = 'DIY_900_TX_TTGO_V2_SX127x_via_UART',
  DIY_900_TX_ESP32_SX127x_E19_via_UART = 'DIY_900_TX_ESP32_SX127x_E19_via_UART',
  DIY_900_TX_ESP32_SX127x_RFM95_via_UART = 'DIY_900_TX_ESP32_SX127x_RFM95_via_UART',
  DIY_900_RX_ESP8285_SX127x_via_UART = 'DIY_900_RX_ESP8285_SX127x_via_UART',
  DIY_900_RX_ESP8285_SX127x_via_BetaflightPassthrough = 'DIY_900_RX_ESP8285_SX127x_via_BetaflightPassthrough',
  DIY_2400_TX_ESP32_SX1280_Mini_via_UART = 'DIY_2400_TX_ESP32_SX1280_Mini_via_UART',
  DIY_2400_TX_ESP32_SX1280_E28_via_UART = 'DIY_2400_TX_ESP32_SX1280_E28_via_UART',
  DIY_2400_TX_ESP32_SX1280_LORA1280F27_via_UART = 'DIY_2400_TX_ESP32_SX1280_LORA1280F27_via_UART',
  GHOST_ATTO_2400_RX_via_STLINK = 'GHOST_ATTO_2400_RX_via_STLINK',
  GHOST_ATTO_2400_RX_via_BetaflightPassthrough = 'GHOST_ATTO_2400_RX_via_BetaflightPassthrough',
  DIY_2400_RX_ESP8285_SX1280_via_UART = 'DIY_2400_RX_ESP8285_SX1280_via_UART',
  DIY_2400_RX_ESP8285_SX1280_via_BetaflightPassthrough = 'DIY_2400_RX_ESP8285_SX1280_via_BetaflightPassthrough',
  DIY_2400_RX_STM32_CCG_Nano_v0_5 = 'DIY_2400_RX_STM32_CCG_Nano_v0_5',
  DIY_2400_RX_STM32_CCG_Nano_v0_5_via_BetaflightPassthrough = 'DIY_2400_RX_STM32_CCG_Nano_v0_5_via_BetaflightPassthrough',
}

export default DeviceTarget;