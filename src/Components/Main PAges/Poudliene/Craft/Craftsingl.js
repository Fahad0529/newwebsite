
import withDataFetching from '../../../withDataFrtching';
import SinglePage from '../../../Singlepage';

const Craftsingl = withDataFetching(SinglePage, 'https://api.homeessentialshive.co.uk/api/v1/data/craftsingle');

export default Craftsingl;