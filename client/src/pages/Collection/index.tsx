import { Footer, Gradients, ArtItems } from '@app/components';
import useFetchGifItems from '@app/hooks/useFetchGifItems';
import useNFTCollectionInfo from '@app/hooks/useNFTCollectionInfo';

const Collection: React.FC = () => {
  const NFTsCollection = useNFTCollectionInfo('collection');
  const gifs = useFetchGifItems(NFTsCollection);

  return (
    <div>
      <Gradients.GradientBgTransactions>
        {gifs && <ArtItems arts={gifs} />}
      </Gradients.GradientBgTransactions>
      {gifs && <Footer />}
    </div>
  );
};

export default Collection;
