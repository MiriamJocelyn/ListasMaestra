using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ListaMaestra.Startup))]
namespace ListaMaestra
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
