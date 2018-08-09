using System.IO;

namespace webapi.ViewModel
{
    public class NewsContentModels
    {
        public int id{get;set;}
        public string title {get;set;}
        public string newsContent {get;set;}
        public byte[] newsProfileImage {get;set;}
    }
}
