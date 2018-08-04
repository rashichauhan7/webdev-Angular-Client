export class WidgetServiceClient {
  WIDGET_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/topic/TID/widget';

  findAllWidgetsForTopic (topicId) {
    return fetch(this.WIDGET_URL.replace('TID', topicId))
      .then(response => response.json());
  }
}
