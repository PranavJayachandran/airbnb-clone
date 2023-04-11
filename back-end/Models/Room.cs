namespace backend.Models;

public class offering
{
    public string icon;
    public string item_name;

    public offering(string icon, string item_name)
    {
        this.icon = icon;
        this.item_name = item_name;
    }
}
public class Room
{

    public int id { get; set; }
    public string name { get; set; }
    public int rating { get; set; }
    public int distance { get; set; }
    public DateTime date { get; set; }
    public int price { get; set; }

    public bool liked { get; set; }

    public string image { get; set; }

    public int guests { get; set; }

    public int bedrooms { get; set; }

    public int bathrooms { get; set; }

    public string host { get; set; }

    public string hostimage { get; set; }

    public string offering_name { get; set; }


}
