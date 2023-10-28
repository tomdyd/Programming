using LabStore.Models.Settings;
using LabStore.Services;
using LabStore.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowOrigin",
        builder =>
        {
            builder.WithOrigins("http://127.0.0.1:5500").AllowAnyHeader().AllowAnyMethod();
        });
});


builder.Services.Configure<LabStoreDatabaseSettings>(
    builder.Configuration.GetSection("LabStoreDatabase"));

builder.Services.AddSingleton<CansService>();
builder.Services.AddSingleton<RawMaterialsService>();
builder.Services.AddSingleton<ValvesService>();

builder.Services.AddControllers()
    .AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null); ;
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseCors("AllowOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
