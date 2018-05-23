const CONFIG_VERSION = '0.0.1'

const defaultConfig = {
  '_': 'This is your OONI Probe config file. See https://ooni.io/help/ooniprobe-cli for help',
  'auto_update': true,
  'sharing': {
    'include_ip': false,
    'include_asn': true,
    'include_gps': true,
    'upload_results': true,
    'send_crash_reports': true
  },
  'notifications': {
    'enabled': true,
    'notify_on_test_completion': true,
    'notify_on_news': false
  },
  'automated_testing': {
    'enabled': false,
    'enabled_tests': [
      'web-connectivity',
      'facebook-messenger',
      'whatsapp',
      'telegram',
      'dash',
      'ndt',
      'http-invalid-request-line',
      'http-header-field-manipulation'
    ],
    'monthly_allowance': '300MB'
  },
  'test_settings': {
    'websites': {
      'enabled_categories': []
    },
    'instant_messaging': {
      'enabled_tests': [
        'facebook-messenger',
        'whatsapp',
        'telegram'
      ]
    },
    'performance': {
      'enabled_tests': [
        'ndt'
      ],
      'ndt_server': 'auto',
      'ndt_server_port': 'auto',
      'dash_server': 'auto',
      'dash_server_port': 'auto'
    },
    'middlebox': {
      'enabled_tests': [
        'http-invalid-request-line',
        'http-header-field-manipulation'
      ]
    }
  },
  'advanced': {
    'include_country': true,
    'use_domain_fronting': true,
  },
  '_config_version': CONFIG_VERSION,
  '_informed_consent': false
}

module.exports = {
  CONFIG_VERSION,
  defaultConfig
}
