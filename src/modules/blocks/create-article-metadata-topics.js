import yaml from 'js-yaml';
import { toBlock,newHtmlList } from '../utils/dom-utils.js';

export default function createArticleMetaDataTopics(
  document,
  meta,
) {
  const fullMetadata = yaml.load(meta);
  const metaElement = document.querySelector('.article-metadata');

     //Article Metadata Topics
     if(fullMetadata.hasOwnProperty("feature") && fullMetadata["feature"].trim() !== ""){
      const feature = fullMetadata["feature"];
      const topicMetadata = feature.split(', ').map(item => item.trim());
      const featureDivTag = document.createElement('div');
      const items = ['Topics:'];
      topicMetadata.forEach((tags) => {
       const a = document.createElement('a');
       a.setAttribute('href', '#');
       a.textContent = tags;
       items.push(a);
     });
     featureDivTag.append(newHtmlList(document, { tag: 'ul', items }));
     const cells = [[featureDivTag]];
     const block = toBlock('article-metadata-topics', cells, document);
    }
}