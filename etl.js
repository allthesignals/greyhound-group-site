const fs = require('fs');
const path = require('path');
const axios = require('axios');

const pathToData = (name, ext = '.json') => path.join(__dirname, dataFolder, name) + ext;

const LISTINGS_ENDPOINT = `https://buildout.com/api/v1/${process.env.BUILDOUT_API_KEY}/properties.json`;

const PROPERTY_TYPES = {
  1:	'Office',
  2:	'Retail',
  3:	'Industrial',
  5:	'Land',
  6:	'Multifamily',
  7:	'Special Purpose',
  8:	'Hospitality',
};

const PROPERTY_SUBTYPES = {
  101:	'Office Building',
  102:	'Creative/Loft',
  103:	'Executive Suites',
  104:	'Medical',
  105:	'Institutional/Governmental',
  106:	'Office Warehouse',
  107:	'Office Condo',
  108:	'Coworking',
  109:	'Lab',
  201:	'Street Retail',
  202:	'Strip Center',
  203:	'Free Standing Building',
  204:	'Regional Mall',
  205:	'Retail Pad',
  206:	'Vehicle Related',
  207:	'Outlet Center',
  208:	'Power Center',
  209:	'Neighborhood Center',
  210:	'Community Center',
  211:	'Specialty Center',
  212:	'Theme/Festival Center',
  213:	'Restaurant',
  214:	'Post Office',
  215:	'Retail Condo',
  216:	'Lifestyle Center',
  301:	'Manufacturing',
  302:	'Warehouse/Distribution',
  303:	'Flex Space',
  304:	'Research & Development',
  305:	'Refrigerated/Cold Storage',
  306:	'Office Showroom',
  307:	'Truck Terminal/Hub/Transit',
  308:	'Self Storage',
  309:	'Industrial Condo',
  310:	'Data Center',
  501:	'Office',
  502:	'Retail',
  503:	'Retail-Pad',
  504:	'Industrial',
  505:	'Residential',
  506:	'Multifamily',
  507:	'Other',
  601:	'High-Rise',
  602:	'Mid-Rise',
  603:	'Low-Rise/Garden',
  604:	'Government Subsidized',
  605:	'Mobile Home Park',
  606:	'Senior Living',
  607:	'Skilled Nursing',
  608:	'Single Family Rental Portfolio',
  701:	'School',
  702:	'Marina',
  703:	'Other',
  704:	'Golf Course',
  705:	'Church',
  801:	'Full Service',
  802:	'Limited Service',
  803:	'Select Service',
  804:	'Resort',
  805:	'Economy',
  806:	'Extended Stay',
  807:	'Casino',
}

const DEAL_STATUS = {
  0:	'Off Market',
  1:	'On Market',
  2:	'Under Contract',
  3:	'Closed  ',
}

async function getData() {
  const { data: {properties} } = await axios(LISTINGS_ENDPOINT);

  const filtered = properties.map(property => ({
    'type': PROPERTY_TYPES[property['property_type_id']] || '',
    'subtype': PROPERTY_SUBTYPES[property['property_subtype_id']] || '',
    'status': DEAL_STATUS[property['sale_deal_status_id']],
    'price': property['sale_price_dollars'],
    'size': property['building_size_sf'],
    'name': property['name'],
    'description': property['location_description'],
    'image': (property['photos'][0] && property['photos'][0]['url']),
  }));

  fs.writeFileSync(path.resolve('src/pages/listings/data.json'), JSON.stringify(filtered));
}

getData();
